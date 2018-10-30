export default {
  token: localStorage.getItem('auth-token') || '',
  isLoading: false,
  name: '',
  role: '',
  giftcard: {},
  recs: [],
  title: 'Gift Card',
  icon: 'card_giftcard',
  selected: [],
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  cols: [
    {
      name: 'edit',
      align: 'left',
      field: 'edit',
      width: '34px',
    },
    {
      name: 'createdate',
      label: 'Create Date',
      align: 'left',
      field: 'createdate',
      sortable: true,
    },
    {
      name: 'username',
      label: 'User Name',
      align: 'left',
      field: 'username',
      sortable: true,
    },
  ],
  fields: [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'code',
      hidden: true,
    },
    {
      name: 'createdate',
      label: 'Create Date',
      type: 'text',
      icon: 'person',
    },
    {
      name: 'username',
      label: 'User Name',
      type: 'text',
      icon: 'account_box',
    },
  ],
}
