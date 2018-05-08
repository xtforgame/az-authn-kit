// model for az RDBMS ORM
//import Sequelize from 'sequelize';

export default ({
  user: {
    publicColumns: userPublicColumns,
    columns: userColumns,
  },
  accountLink: {
    publicColumns: accountLinkPublicColumns,
    columns: accountLinkColumns,
  },
}) => {
  return {
    models: {
      user: {
        columns: userColumns,
        options: {
          name: {
            singular: 'user',
            plural: 'users',
          },
          // defaultScope: {
          //   attributes: userPublicColumns,
          // },
        },
      },
      accountLink: {
        // tableName: 'tbl_account_link',
        columns: accountLinkColumns,
        options: {
          name: {
            singular: 'accountLink',
            plural: 'accountLinks',
          },
          // defaultScope: {
          //   attributes: accountLinkPublicColumns,
          // },
          indexes: [
            {
              unique: true,
              fields: ['user_id', 'provider_id'],
              where: {
                deleted_at: null,
              },
            },
            {
              unique: true,
              fields: ['provider_id', 'provider_user_id'],
              where: {
                deleted_at: null,
              },
            },
          ],
        },
      },
    },
  };
};
