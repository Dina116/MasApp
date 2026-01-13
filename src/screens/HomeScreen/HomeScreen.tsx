import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuGridList } from './MenuGridList';
import { UserRoles } from '../../User/userRoles';
import { useNavigation } from '@react-navigation/native';
import { data as getLayoutData } from './MenuData';

const currentUserRole = UserRoles.ADMIN;
export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const filteredData = useMemo(() => {
    const allData = getLayoutData();
    const userSpecificData = allData.filter(item =>
      item.roles?.includes(currentUserRole),
    );
    return userSpecificData.sort((a, b) => (a.order || 99) - (b.order || 99));
  }, []);

  const handleItemPress = (index: number) => {
    const selectedItem = filteredData[index];
    if (selectedItem && selectedItem.route) {
      console.log(`الانتقال إلى شاشة: ${selectedItem.route}`);
      navigation.navigate(selectedItem.route);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MenuGridList data={filteredData} onItemPress={handleItemPress} />
    </SafeAreaView>
  );
}
