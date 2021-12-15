import ICardInfo from "./interfaceCard";

interface IDevices {
  [x: string]: any;
  mouses: ICardInfo[];
  keyboards: ICardInfo[];
  headphones: ICardInfo[];
  cpu: ICardInfo[];
}
export default IDevices;
