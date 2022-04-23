import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductList} from '@native/containers';
import CustomTab from './CustomTab';
import {BottomTabsParamList} from '@app/framework/native/navigation';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen
        name="ProductList"
        options={{title: 'Trang chủ'}}
        component={ProductList}
      />
      <Tab.Screen
        name="Orders"
        options={{title: 'Đơn hàng'}}
        component={ProductList}
      />
      <Tab.Screen
        name="Revenue"
        options={{title: 'Doanh thu'}}
        component={ProductList}
      />
      <Tab.Screen
        name="Customers"
        options={{title: 'Khách hàng'}}
        component={ProductList}
      />
      <Tab.Screen
        name="Profile"
        options={{title: 'Hồ sơ'}}
        component={ProductList}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
