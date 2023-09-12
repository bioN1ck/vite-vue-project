import { Ref, ref } from 'vue';

type Exposed<T> = {
  result: Ref<T | null>;
  error: any;
  execute: () => void;
};

export const useFetch = <T>(url: string): Exposed<T> => {
  const result = ref(null);
  const error = ref(null);

  const execute = async () => {
    try {
      const response = await fetch(url);
      result.value = await response.json();
    } catch (e: any) {
      error.value = e;
    }
  };

  return { result, error, execute };
};
