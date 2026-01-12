import {
  FlatListProps,
  ImageProps,
  NativeSyntheticEvent,
  StyleProp,
  TargetedEvent,
  TextInputProps,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type LoginPayload = {
  user: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export interface TouchableWebProps extends TouchableWithoutFeedbackProps {
  onMouseEnter?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}

export interface ListItemProps extends TouchableWebProps {
  title?: RenderProp<TextProps>;
  description?: RenderProp<TextProps>;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<ViewProps>;
  children?: React.ReactNode;
}

export type ListItemElement = React.ReactElement<ListItemProps>;

export type ListProps<ItemT = any> = FlatListProps<ItemT>;
export type ListElement<ItemT = any> = React.ReactElement<ListProps<ItemT>>;

export type RenderProp<Props = {}> = (props?: Props) => React.ReactElement;
export type InputElement = React.ReactElement<InputProps>;

export interface TextProps {
  children?: React.ReactNode;
}
export interface InputProps extends TextInputProps {
  disabled?: boolean;
  label?: RenderProp<TextProps>;
  caption?: RenderProp<TextProps>;
  captionIcon?: RenderProp<Partial<ImageProps>>;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
