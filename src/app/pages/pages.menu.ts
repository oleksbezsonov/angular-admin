export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'status',
        data: {
          menu: {
            title: 'Status',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'unscheduled',
            data: {
              menu: {
                title: 'Unscheduled',
              }
            }
          },
          {
            path: 'pending',
            data: {
              menu: {
                title: 'Pending',
              }
            }
          },
          {
            path: 'scheduled',
            data: {
              menu: {
                title: 'Scheduled',
              }
            }
          },
          {
            path: 'dispatched',
            data: {
              menu: {
                title: 'Dispatched',
              }
            }
          },
          {
            path: 'enroute',
            data: {
              menu: {
                title: 'En Route',
              }
            }
          }
        ]
      },
      {
        path: 'records',
        data: {
          menu: {
            title: 'Records',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'requests',
            data: {
              menu: {
                title: 'Requests',
              }
            }
          }
        ]
      },
      {
        path: 'setup',
        data: {
          menu: {
            title: 'Setup',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'userList',
            data: {
              menu: {
                title: 'Users & Groups',
              }
            }
          }
        ]
      }
    ]
  }
];
