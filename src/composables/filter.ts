const [engineer, toggleEngineer] = useToggle()
const [driller, toggleDriller] = useToggle()
const [gunner, toggleGunner] = useToggle()
const [scout, toggleScout] = useToggle()
const filter = reactive({ engineer, driller, gunner, scout })

export default function useFilter() {
  function toggleClass(name: string) {
    switch (name) {
      case 'engineer':
        toggleEngineer()
        break
      case 'driller':
        toggleDriller()
        break
      case 'gunner':
        toggleGunner()
        break
      case 'scout':
        toggleScout()
        break
      default:
        break
    }
  }
  return {
    filter,
    toggleClass,
  }
}
