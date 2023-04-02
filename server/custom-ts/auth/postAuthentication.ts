import type { AuthenticationHookRequest } from 'fireboom-wundersdk/server'

export default async function postAuthentication(hook: AuthenticationHookRequest): Promise<void> {
  if (hook.user) {
    const { providerId, userId } = hook.user
    const { picture, name } = hook.user.idToken!
    const resp = await hook.internalClient.queries.User__GetOne({
      input: {
        id: userId,
      },
    })
    if (!resp.error) {
      const existedUser = resp.data!.data
      if (!existedUser) {
        const userCount = await hook.internalClient.queries.User__CountUsers({})
        const rest = await hook.internalClient.mutations.User__CreateOne({
          input: {
            name: name as string,
            id: userId!,
            avatarUrl: picture as string,
            role: userCount.data?.data?.count.id === 0 ? 'admin' : 'user',
          },
        })
        if (!rest.error) {
          console.info(`Success sync user: ${providerId} - ${name}`)
        }
      }
    }
  }
}
