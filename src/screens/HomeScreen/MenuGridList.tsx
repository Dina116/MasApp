import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import { LayoutData } from './MenuData';
import React, { useCallback, useEffect } from 'react';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { ListElement, ListItemElement, ListProps } from '../../utils/types';

export interface MenuGridListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutData[];
  onItemPress: (index: number) => void;
}
export const HomeIcon = React.memo((props: { iconName: string }) => {
  const color = '#ef7917';
  return (
    <Ionicons
      color={color}
      name={props.iconName as any}
      style={styles.homeIcon}
    />
  );
});
export const MenuGridList = (props: MenuGridListProps): ListElement => {
  const { contentContainerStyle, onItemPress, data, ...listProps } = props;

  const renderItem = useCallback(
    (info: ListRenderItemInfo<LayoutData>): ListItemElement => (
      <Pressable
        style={({ pressed }) => [styles.item, pressed && { opacity: 0.7 }]}
        onPress={() => onItemPress(info.index)}
        android_ripple={{ color: '#FFDD95' }}
      >
        {info.item.icon &&
          info.item.icon({ width: 64, height: 64, alignSelf: 'center' })}
        {info.item.iconName && <HomeIcon iconName={info.item.iconName} />}
        <Text style={styles.itemTitle}>{info.item.title}</Text>
      </Pressable>
    ),
    [onItemPress],
  );
  useEffect(() => {
    console.log('menu grid list');
  }, []);

  return (
    <FlatList
      data={data}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
      removeClippedSubviews={true}
      {...listProps}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightblue', 
    padding: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1.0,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: 'white', 
  },
  itemTitle: {
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 22,
    textAlign: 'center',
    color: '#2f5eaa',
    fontWeight: 'bold',
  },
  homeIcon: { width: 64, height: 64, alignSelf: 'center' },
});
