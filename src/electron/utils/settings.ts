import ElectronStore from "electron-store";

type Color = `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

export interface Colors {
  backgroundColors: {
    layer1: Color,
    layer2: Color,
    layer3: Color,
    layer4: Color 
  },
  foregroundColor: Color,
  accents: Color[]
}

interface ISettings {
  check: boolean;
  maximizeOnStartup: boolean;
  colors: Colors;
}

const settings = new ElectronStore<ISettings>({
  defaults: {
    check: false,
    maximizeOnStartup: true,
    colors: {
      backgroundColors: {
        layer1: "#121212",
        layer2: "#252525",
        layer3: "#363636",
        layer4: "#454545" 
      },
      foregroundColor: "#FFF",
      accents: [
        "#fe7877",
        "#8af5c2",
        "#f5dd93",
        "#35c8f2",
      ]
    }
  },
});

export default settings;
