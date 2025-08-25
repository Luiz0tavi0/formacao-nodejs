declare module "*.png" {
    const value: ImageSourcePropType;
    export default value;
}

declare module "*.jpg" {
    const value: ImageSourcePropType;
    export default value;
}

declare module "*.jpeg" {
    const value: ImageSourcePropType;
    export default value;
}

declare module "*.svg" {
    import * as React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}
