import { observer } from '@legendapp/state/react'
import { state$, store$ } from '~states'

const Example = observer(function Example() {
  const theme = state$.settings.theme.get()
  const name = store$.user.name.get()

  const toggleTheme = () => {
    console.log('toggleTheme', theme)
    state$.settings.theme.set(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <input value={name} onChange={e => store$.user.name.set(e.target.value)} />
      <button onClick={toggleTheme}>
        Toggle theme
      </button>

      <p>
        Current theme: <strong>{theme}</strong>
      </p>
    </>
  )
})

export default Example
