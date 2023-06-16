import { useNetInfo } from "@react-native-community/netinfo";
import { KickitLocalClient } from "./client";

export const usePersistence = () => {
  const netInfo = useNetInfo();
  const localClient = new KickitLocalClient("test");

  if (netInfo.isConnected) {
    // do cloud storage stuff
    console.log("connected");
  } // handle local

  return localClient;
};
