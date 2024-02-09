import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import AdvanceComponent from "../ui/AdvanceComponent";
import CustonButton from "../ui/CustonButton";
import React, { useContext, useState } from "react";
import { sleepTime } from "../utils/Utilities";

import { CleanerContext } from "../../store/cleaner-context";

const CleanerScreen = () => {
  const [cache, setCache] = useState(-1);
  const [obsolete, setObsolete] = useState(-1);
  const [packages, setPackages] = useState(-1);
  const [residuals, setResiduals] = useState(-1);
  const [memory, setMemory] = useState(-1);
  const [total, setTotal] = useState(-1);
  const [cleanTotal, setCleanTotal] = useState(-1);
  const [show, setShow] = useState(false);

  const cleanerCtx = useContext(CleanerContext);
  const { height } = useWindowDimensions();

  useFocusEffect(
    React.useCallback(() => {
      setShow(false);
      setTotal(-1);
      setCleanTotal(-1);
      setCache(-1);
      setObsolete(-1);
      setPackages(-1);
      setResiduals(-1);
      setMemory(-1);
    }, [])
  );

  const onProcess = () => {
    setShow(true);
    setTotal(-1);
    setCleanTotal(-1);
    setCache(-1);
    setObsolete(-1);
    setPackages(-1);
    setResiduals(-1);
    setMemory(-1);
    sleepTime().then((res) => {
      setTotal((current) => (parseFloat(current) + parseFloat(res)).toFixed(2));
      setCleanTotal((current) =>
        (parseFloat(current) + parseFloat(res)).toFixed(2)
      );
      setCache(res);
    });
    sleepTime().then((res) => {
      setTotal((current) => (parseFloat(current) + parseFloat(res)).toFixed(2));
      setCleanTotal((current) =>
        (parseFloat(current) + parseFloat(res)).toFixed(2)
      );
      setObsolete(res);
    });
    sleepTime().then((res) => {
      setTotal((current) => (parseFloat(current) + parseFloat(res)).toFixed(2));
      setCleanTotal((current) =>
        (parseFloat(current) + parseFloat(res)).toFixed(2)
      );
      setPackages(res);
    });
    sleepTime().then((res) => {
      setTotal((current) => (parseFloat(current) + parseFloat(res)).toFixed(2));
      setCleanTotal((current) =>
        (parseFloat(current) + parseFloat(res)).toFixed(2)
      );
      setResiduals(res);
    });
    sleepTime().then((res) => {
      setTotal((current) => (parseFloat(current) + parseFloat(res)).toFixed(2));
      setCleanTotal((current) =>
        (parseFloat(current) + parseFloat(res)).toFixed(2)
      );
      setMemory(res);
    });
    cleanerCtx.chageCleaner();
  };

  const onClean = () => {
    sleepTime().then((res) => {
      setCleanTotal((current) =>
        (parseFloat(current) - parseFloat(cache)).toFixed(2)
      );
      setCache(0);
    });
    sleepTime().then((res) => {
      setCleanTotal((current) =>
        (parseFloat(current) - parseFloat(obsolete)).toFixed(2)
      );
      setObsolete(0);
    });
    sleepTime().then((res) => {
      setCleanTotal((current) =>
        (parseFloat(current) - parseFloat(packages)).toFixed(2)
      );
      setPackages(0);
    });
    sleepTime().then((res) => {
      setCleanTotal((current) =>
        (parseFloat(current) - parseFloat(residuals)).toFixed(2)
      );
      setResiduals(0);
    });
    sleepTime().then((res) => {
      setCleanTotal((current) =>
        (parseFloat(current) - parseFloat(memory)).toFixed(2)
      );
      setMemory(0);
    });
  };

  let imageSize = 150;
  let marginTop = 20;

  if (height > 600) {
    imageSize = 225;
    marginTop = 20;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginTop: marginTop,
  };

  const cleanTitle = "Limpiar " + cleanTotal + " MB";
  console.log(2345, cleanTotal)
  return (
    <View style={styles.container}>
      <View>
        <CustonButton
          onAction={onProcess}
          customButtonStyle={styles.customButtonStyle}
          customTextStyle={styles.customTextStyle}
          title="Procesar"
        />
      </View>
      <View style={[styles.cicle, imageStyle]}>
        <Text>{total !== -1 && total}</Text>
      </View>
      <View>
        {show && (
          <>
            <AdvanceComponent title="Archivos de caché" percentage={cache} />
            <AdvanceComponent
              title="Archivos obsoletos"
              percentage={obsolete}
            />
            <AdvanceComponent title="Paquetes" percentage={packages} />
            <AdvanceComponent title="Residuales" percentage={residuals} />
            <AdvanceComponent title="Memoria" percentage={memory} />
          </>
        )}
      </View>
      <View>
        {parseInt(cleanTotal) > 0 && (
          <CustonButton
            onAction={onClean}
            customButtonStyle={styles.customButtonStyle}
            customTextStyle={styles.customTextStyle}
            title={cleanTitle}
          />
        )}
      </View>
    </View>
  );
};

export default CleanerScreen;

const styles = StyleSheet.create({
  container: { justifyContent: "space-between", height: "100%" },
  cicle: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 150,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  customButtonStyle: {
    backgroundColor: "#f17431",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
    marginVertical: 30,
    marginHorizontal: 30,
    width: "80%",
  },
});
