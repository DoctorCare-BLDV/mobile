import {
  SectionListProps,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {RowItemData} from '../components';
import {ConfirmationModalProps} from '../components/confirmation-modal';
import {FilterModalData} from '../containers';

export interface FilterModalProps
  extends Omit<SectionListProps<RowItemData>, 'renderItem' | 'sections'> {
  title?: string;
  cancelTitle?: string;
  confirmTitle?: string;

  containerStyle?: StyleProp<ViewStyle>;

  data?: FilterModalData[];
  selectedData?: RowItemData[];

  searchValue?: string;

  onFinishSelectOptions?: (options: RowItemData[]) => void;

  searchable?: boolean;

  renderItem?: ListRenderItem<RowItemData> | null | undefined;
}

export interface ProductSearchProps {
  selectedFilters?: RowItemData[];
  searchValue?: string;
}

export type PrivateParamList = {
  BottomTab: undefined;
  ProductDetail: undefined;
  Cart: undefined;
  OrderConfirmation: undefined;
  ProductSearch: ProductSearchProps;
  Notifications: undefined;

  FilterModal: FilterModalProps;
  ConfirmationModal: ConfirmationModalProps;
  EditProfile: undefined;
  ChangePassword: undefined;
  Revenue: undefined;
};
