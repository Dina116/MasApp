import { Modal } from 'react-native';
import { LoadingView } from './LoadingView';
import { createContext, useCallback, useContext, useState } from 'react';
type Props = { children: any };

//data which the provider recieve to run loading
type LoadingOptions = {
  progress?: number;
  title?: string;
  details?: string;
  timeOut?: number;
  onCancel?: () => void;
};

type LoadingContextProps = {
  // what should context provides the screen
  IsLoading: boolean;
  ShowLoading: (options?: LoadingOptions) => void;
  UpdateProgress: (options?: LoadingOptions) => void;
  HideLoading: () => void;
};
const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

interface LoadingProvider {
  progress?: number;
  title?: string;
  details?: string;
  isLoading: boolean;
  options?: LoadingOptions;
  background?: boolean;
}
export function LoadingProvider({ children }: Props) {
  const [state, _setstate] = useState<LoadingProvider>({ isLoading: false });
  // connect between old and new states to prevent loss the data when update the state
  /*
  ex:
   state = {
  isLoading: false,
  options: { title: "Loading..." },
  background: true,
}
  setstate({ isLoading: true });
state = {
  isLoading: true,         // اتغير
  options: { title: "Loading..." }, // فضل زي ما هو
  background: true,        // فضل زي ما هو
}

 */
  const setstate = (nw: LoadingProvider) => {
    _setstate((old: LoadingProvider) => {
      return { ...old, ...nw };
    });
  };
  const showLoading = useCallback((options?: LoadingOptions) => {
    setstate({
      title: options?.title,
      progress: options?.progress,
      details: options?.details,
      isLoading: true,
      options: options,
    });
  }, []);

  const handleCancel = useCallback(() => {
    setstate({
      isLoading: false,
      options: undefined,
    });
    if (state?.options?.onCancel) {
      state.options.onCancel();
    }
  }, [state.options]);

  const hideLoading = useCallback(() => {
    setstate({ isLoading: false });
  }, []);

  const updateProgress = useCallback(
    (options?: LoadingOptions) => {
      setstate({
        ...state,
        title: options?.title,
        progress: options?.progress,
        details: options?.details,
      });
    },
    [state],
  );

  const data: LoadingContextProps = {
    ShowLoading: showLoading,
    HideLoading: hideLoading,
    IsLoading: state.isLoading,
    UpdateProgress: updateProgress,
  };

  return (
    <LoadingContext.Provider value={data}>
      <>
        <Modal
          visible={state.isLoading}
          transparent={true}
          animationType="fade"
        >
          <LoadingView
            title={state.title}
            timeOut={state.options?.timeOut}
            progress={state.progress}
            isLoading={state.isLoading}
            showCancel={!!state?.options?.onCancel}
            onCancelClick={handleCancel}
          />
        </Modal>
      </>
      {children}
    </LoadingContext.Provider>
  );
}
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
