export default (context) => {
  // const hasAccess = !!context.app.context.app.$cookies.get('access');
  // const hasRefresh = !!context.app.context.app.$cookies.get('refresh');
  const isEmailConfirmed = !!context.app.context.app.$cookies.get('status');
  if (!isEmailConfirmed) {
    return context.redirect('/sign-in');
  }
};
