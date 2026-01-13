import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { useLoading } from '../../loading';
import Style from './Style';
import { initGrpcClient } from '../../services/client';
import { saveSettings } from '../../db/SQLite/database';
import { useNavigation } from '@react-navigation/native';
import { checkRegsiterDevice } from '../../User/checkRegsiterDevice';
import { GetUsers } from '../../User/GetUsers';

interface DeviceCredentails {
  code: number;
  name: string;
  password: string;
}
export default function RegisterDeviceScreen() {
  const navigation = useNavigation();
  const Form = useForm<DeviceCredentails>();
  const { control, handleSubmit, formState } = Form;
  const { errors } = formState;
  const { ShowLoading, HideLoading } = useLoading();
  const handleRegister = async (data: DeviceCredentails) => {
    ShowLoading({ title: 'تسجيل الجهاز' });
    try {
      await saveSettings({
        name: data.name,
        password: data.password,
        code: data.code,
      });
      await initGrpcClient();
      console.log('[فحص الاتصال] تم تهيئة العميل بالإعدادات الجديدة بنجاح.');
      await checkRegsiterDevice(data.name, data.password, data.code);
      console.log('pass from checkRegsiterDevice ');
      await GetUsers();
      console.log('pass from cGetUsers ');
      navigation.navigate('LoginScreen' as never);
    } catch (err) {
      console.error('Failed to register device:', err);
    } finally {
      HideLoading();
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ gap: 20 }}>
        <Controller
          control={control}
          name="code"
          rules={{ required: true }}
          render={props => (
            <View style={Style.inputContainer}>
              <TextInput
                style={Style.textInput}
                placeholder="كودالمحصل"
                placeholderTextColor="#C0C0C0"
                value={props.field.value?.toString()}
                onChangeText={text => {
                  const num = parseInt(text, 10);
                  props.field.onChange(isNaN(num) ? undefined : num);
                }}
              />
            </View>
          )}
        />
        {errors.code && <Text>{errors.code.message} </Text>}
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={props => (
            <View style={Style.inputContainer}>
              <TextInput
                style={Style.textInput}
                placeholder="الاسم"
                placeholderTextColor="#C0C0C0"
                onChangeText={text => props.field.onChange(text)}
                value={props.field.value}
              />
            </View>
          )}
        />
        {errors.name && <Text>{errors.name.message}</Text>}
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={props => (
            <View style={Style.inputContainer}>
              <TextInput
                style={Style.textInput}
                placeholder=" كلمةالمرور"
                placeholderTextColor="#C0C0C0"
                onChangeText={text => props.field.onChange(text)}
                value={props.field.value}
              />
            </View>
          )}
        />
        {errors.password && <Text>{errors.password.message}</Text>}

        <TouchableOpacity
          style={Style.btn}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={Style.text}>تسجيل</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
