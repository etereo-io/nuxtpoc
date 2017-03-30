import store from '~store'
export default async function ({ params, error }) {
  const lang = params.lang || 'en'
  if (!store.state.lang.locales.includes(lang)) {
    await store.dispatch('lang/setLang', 'en')
    return error({ message: 'Page not found', statusCode: 404 })
  }
  await store.dispatch('lang/setLang', lang)
}
