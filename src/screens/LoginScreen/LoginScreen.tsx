import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Style from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useLoading } from '../../loading';
import { Login } from '../../User/Login';


interface UserCredentails {
  userName: string;
  password: string;
}
type RootStackParamList = {
  Login: { reset?: boolean };
};
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export default function LoginScreen() {
  const location: string = '';
  const navigation = useNavigation();
  const { ShowLoading, HideLoading } = useLoading();
  const route = useRoute<LoginScreenRouteProp>();
  const Form = useForm<UserCredentails>({
    defaultValues: {
      userName: '',
      password: '',
    },
  });
  const { control, formState, handleSubmit } = Form;
  const { errors } = formState;
  useEffect(() => {
    if (route.params?.reset) {
      Form.reset({ userName: '', password: '' });
    }
  }, [route.params?.reset, Form]);

  const handleLogin = async (data: UserCredentails) => {
    ShowLoading({ title: 'تسجيل الدخول' });
    try {
      const result = await Login(data.userName, data.password);
      if (result) {
        navigation.navigate('HomeScreen' as never);
      } else {
        console.log('بيانات المستخدم غير صحيحة');
      }
    } catch (error: any) {
      const errorMsg = decodeURIComponent(error.message);
      console.log('Error from server:', errorMsg);
    } finally {
      HideLoading();
    }
  };
  return (
    <LinearGradient
      colors={['#a6d9f5ff', '#6ebdf9ff']}
      style={Style.linearGradient}
    >
      <SafeAreaView>
        <View style={Style.dataNameContainer}>
          <Text style={Style.text}>{location}</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Controller
            control={control}
            name="userName"
            rules={{ required: true }}
            render={props => (
              <View style={Style.inputContainer}>
                <IonIcon name="person-outline" size={22} color="#C0C0C0" />
                <TextInput
                  style={Style.textInput}
                  placeholder="اسم الدخول"
                  placeholderTextColor="#C0C0C0"
                  value={props.field.value}
                  onChangeText={text => props.field.onChange(text)}
                />
              </View>
            )}
          />
          {errors.userName && <Text>{errors.userName.message} </Text>}
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={props => (
              <View style={Style.inputContainer}>
                <IonIcon name="lock-closed-outline" size={22} color="#C0C0C0" />
                <TextInput
                  style={Style.textInput}
                  placeholder="كلمة المرور"
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
            onPress={handleSubmit(data => handleLogin(data))}
          >
            <Text style={Style.text}>دخول</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
