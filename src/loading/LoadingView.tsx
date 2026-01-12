import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

//data which the componenet needs to render on screen
type LoadingViewProps = {
  isLoading: boolean;
  title?: string;
  subTile?: string;
  progress?: number;
  timeOut?: number;
  showCancel?: boolean;
  onCancelClick?: () => void;
};

export function LoadingView(props: LoadingViewProps) {
  const { timeOut, showCancel, progress, title, subTile, onCancelClick } =
    props;

  const [time, setTime] = useState(timeOut || 0);

  useEffect(() => {
    if (!timeOut || timeOut <= 0) return;
    setTime(timeOut);
    const interval = setInterval(() => {
      setTime(prev => Math.max(prev - 100, 0));
    }, 100);
    return () => clearInterval(interval);
  }, [timeOut]);

  return (
    <View style={styles.overlay}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />

        {title && <Text style={styles.text}>{title}</Text>}
        {subTile && <Text style={styles.subText}>{subTile}</Text>}
        {progress !== undefined && (
          <Text style={styles.progressText}>{progress}%</Text>
        )}

        {time > 0 && (
          <Text style={styles.timeoutText}>{(time / 1000).toFixed(1)}s</Text>
        )}

        {showCancel && (
          <TouchableOpacity onPress={onCancelClick} style={styles.cancelButton}>
            <Text>Cancel </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
