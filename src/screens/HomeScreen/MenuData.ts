import { UserRoles } from '../../auth/userRoles';
import { MenuItem } from './MenuItem';

export interface LayoutData extends Partial<MenuItem> {
  route: string;
  roles?: Array<UserRoles>;
  iconName?: string;
  order?: number;
}

export const data = (): LayoutData[] => {
  let rotes: LayoutData[] = [
    {
      title: 'الاعدادت',
      route: 'SettingScreen',
      roles: [
        UserRoles.ADMIN,
        UserRoles.DUMMY,
        UserRoles.MOCK,
        UserRoles.REGISTER,
      ],
      iconName: 'settings',
    },
    {
      title: 'تسجيل الجهاز',
      route: 'RegisterDeviceScreen',
      roles: [
        UserRoles.ADMIN,
        UserRoles.DUMMY,
        UserRoles.MOCK,
        UserRoles.REGISTER,
      ],
      iconName: 'smartphone',
    },
    // {
    //   title: "بيانات الجهاز",
    //   route: "DeviceInfoScreen",
    //   roles: [
    //     UserRoles.KHELSA,
    //     UserRoles.ADMIN,
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.DUMMY,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "info",
    // },
    // {
    //   title: "التقارير",
    //   route: "Reports",
    //   roles: [
    //     UserRoles.KHELSA,
    //     UserRoles.ADMIN,
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "file",
    // },
    // {
    //   title: "صيانة النظام",
    //   route: "Maintinance",
    //   roles: [UserRoles.ADMIN, UserRoles.DUMMY, UserRoles.MOCK],
    //   iconName: "scissors",
    // },
    // {
    //   title: "زيارة العملاء",
    //   route: "Walks",
    //   roles: [UserRoles.COLLECTOR, UserRoles.READER, UserRoles.MOCK],
    //   iconName: "people-outline",
    //   order: 1,
    // },
    // {
    //   title: "البحث",
    //   route: "Search",
    //   roles: [
    //     UserRoles.KHELSA,
    //     UserRoles.ADMIN,
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "search",
    //   order: 2,
    // },
    // {
    //   title: "نقل البيانات",
    //   route: "Sync",
    //   roles: [
    //     UserRoles.KHELSA,
    //     UserRoles.ADMIN,
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.DUMMY,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "sync",
    // },

    // {
    //   title: "التوريدات",
    //   route: "Hafza",
    //   roles: [UserRoles.COLLECTOR, UserRoles.MOCK],
    //   iconName: "attach-2",
    //   order: 6,
    // },
    // {
    //   title: "استعلامات من الخادم فقط ",
    //   route: "Query",
    //   roles: [
    //     UserRoles.KHELSA,
    //     UserRoles.ADMIN,
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "question-mark-circle-outline",
    //   order: 3,
    // },

    // {
    //   title: "داشبورد",
    //   route: "empDashboard",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.KHELSA,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "bar-chart-outline",
    //   order: 4,
    // },

    // {
    //   title: "الإيصالات",
    //   route: "Receiptsss",
    //   roles: [UserRoles.COLLECTOR, UserRoles.ADMIN, UserRoles.MOCK],
    //   iconName: "printer-outline",
    //   order: 5,
    // },
    // {
    //   title: "اختبار الطباعة",
    //   route: "printTest",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.MOCK,
    //     UserRoles.DUMMY,
    //   ],
    //   iconName: "edit-2-outline",
    // },

    // {
    //   title: "سجل الطباعة",
    //   route: "PrintLogs",
    //   roles: [UserRoles.ADMIN, UserRoles.DUMMY, UserRoles.MOCK],
    //   iconName: "printer-outline",
    // },
    // {
    //   title: "شكوى فنية",
    //   route: "complaints",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.KHELSA,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "question-mark-circle-outline",
    // },
    // {
    //   title: "مسبق الدفع",
    //   route: "prepaid",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.KHELSA,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "credit-card",
    // },
    // {
    //   title: "الموقع",
    //   route: "locationMon",
    //   roles: [UserRoles.COLLECTOR, UserRoles.READER, UserRoles.DUMMY],
    //   iconName: "pin-outline",
    // },
    // {
    //   title: "ترتيب العملاء",
    //   route: "Sequence",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.MOCK,
    //     UserRoles.DUMMY,
    //   ],
    //   iconName: "menu-arrow-outline",
    // },
    // {
    //   title: "db query",
    //   route: "dbQueryScreen",
    //   roles: [UserRoles.DUMMY],
    //   iconName: "edit-2-outline",
    // },

    // {
    //   title: "fawry test",
    //   route: "fawryTest",
    //   roles: [UserRoles.DUMMY],
    //   iconName: "edit-2-outline",
    // },
    // {
    //   title: "الخلسة",
    //   route: "Khelsa",
    //   roles: [
    //     UserRoles.COLLECTOR,
    //     UserRoles.READER,
    //     UserRoles.KHELSA,
    //     UserRoles.MOCK,
    //   ],
    //   iconName: "credit-card",
    //   order: 3,
    // },
    // {
    //   title: "Database",
    //   route: "DatabaseScreen",
    //   roles: [UserRoles.ADMIN, UserRoles.MOCK, UserRoles.DUMMY],
    //   iconName: "hard-drive-outline",
    //   order: 3,
    // },
  ];
  //   if (x?.enable_cdu) {
  //     rotes.push({
  //       title: "ادارة العقارات",
  //       route: "buildingsManagment",
  //       roles: [UserRoles.KHELSA],
  //       iconName: "pin-outline",
  //     });
  //   }
  //   if (x?.enable_messaging) {
  //     rotes.push({
  //       title: "الرسائل",
  //       route: "messages",
  //       roles: [
  //         UserRoles.COLLECTOR,
  //         UserRoles.READER,
  //         UserRoles.KHELSA,
  //         UserRoles.MOCK,
  //       ],
  //       iconName: "credit-card",
  //     });
  //   }
  //   if (!x?.enable_printing) {
  //     rotes.push(
  //       {
  //         title: "زيارة بالباركود",
  //         route: "customersWithBarCode",
  //         roles: [UserRoles.COLLECTOR, UserRoles.READER, UserRoles.MOCK],
  //         iconName: "radio",
  //       },
  //       {
  //         title: "تحصيل مجموعة",
  //         route: "BatchCollection",
  //         roles: [UserRoles.COLLECTOR, UserRoles.MOCK],
  //         iconName: "layers",
  //       },
  //       {
  //         title: "تحصيل فاتورة",
  //         route: "SingleCollection",
  //         roles: [UserRoles.COLLECTOR, UserRoles.READER, UserRoles.MOCK],
  //         iconName: "credit-card",
  //       }
  //     );
  //   }
  return rotes;
};
