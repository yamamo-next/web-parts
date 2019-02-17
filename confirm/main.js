$('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
  onConfirm: function () {
      console.log('[実行ボタン]');
  },
  onCancel: function () {
      console.log('[キャンセルボタン]');
  }
});
