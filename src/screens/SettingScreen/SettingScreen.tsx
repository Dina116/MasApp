import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import Style from './Styles';
import { saveSettings } from '../../db/SQLite/database';
import { initGrpcClient } from '../../services/client';
import { useLoading } from '../../loading';
import { checkConnectionWithVersion } from './checkConnectionWithVersion';

interface SettingsCredentails {
  ip: string;
  port: string;
}
export default function SettingScreen() {
  const Form = useForm<SettingsCredentails>();
  const { control, handleSubmit, formState } = Form;
  const { errors } = formState;
  const { ShowLoading, HideLoading } = useLoading();

  const handleCheckConnection = async (data: { ip: string; port: string }) => {
    console.log(`بدء فحص الاتصال لـ: ${data.ip}:${data.port}`);
    ShowLoading({ title: 'جاري فحص الاتصال...' });
    try {
      await saveSettings({ ip: data.ip, port: data.port });
      await initGrpcClient();
      console.log('[فحص الاتصال] تم تهيئة العميل بالإعدادات الجديدة بنجاح.');
      const response = await checkConnectionWithVersion();
      console.log(' تم إنشاء طلب فارغ.');
      console.log(' تم استلام رد من الخادم:', response);
      Alert.alert('نجاح', `تم الاتصال بالخادم بنجاح!`);
    } catch (error: any) {
      console.error(' فشل الاتصال:', error);
      Alert.alert(
        'فشل الاتصال',
        `لم يتم العثور على الخادم أو الخادم لا يعمل.\nالرجاء التأكد من صحة الـ IP والمنفذ.\n\nتفاصيل الخطأ: ${
          error.message || 'Unknown error'
        }`,
      );
    } finally {
      HideLoading();
    }
  };
  const handleSave = async (data: SettingsCredentails) => {
    try {
      await saveSettings({ ip: data.ip, port: data.port });
      console.log('تم حفظ الإعدادات بنجاح!', data);
      Alert.alert('تم حفظ البيانات بنجاح');
    } catch (error) {
      console.error('فشل حفظ الإعدادات:', error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ gap: 20 }}>
        <Controller
          control={control}
          name="ip"
          rules={{ required: true }}
          render={props => (
            <View style={Style.inputContainer}>
              <TextInput
                style={Style.textInput}
                placeholder="Server ip"
                placeholderTextColor="#C0C0C0"
                value={props.field.value}
                onChangeText={text => props.field.onChange(text)}
              />
            </View>
          )}
        />
        {errors.ip && <Text>{errors.ip.message} </Text>}
        <Controller
          control={control}
          name="port"
          rules={{ required: true }}
          render={props => (
            <View style={Style.inputContainer}>
              <TextInput
                style={Style.textInput}
                placeholder="port"
                placeholderTextColor="#C0C0C0"
                onChangeText={text => props.field.onChange(text)}
                value={props.field.value}
              />
            </View>
          )}
        />
        {errors.port && <Text>{errors.port.message}</Text>}
        <TouchableOpacity
          style={Style.btn}
          onPress={handleSubmit(handleCheckConnection)}
        >
          <Text style={Style.text}>فحص الاتصال</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btn} onPress={handleSubmit(handleSave)}>
          <Text style={Style.text}>حفظ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
