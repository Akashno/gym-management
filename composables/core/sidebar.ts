import { ref } from 'vue'

export function useSidebar() {
  interface SidebarItem {
    title: string
    link: string
    icon: string
  }
  const sidebarItems = ref<SidebarItem[]>([
    {
      title: 'Dashboard',
      link: '/',
      icon: 'radix-icons:dashboard',
    },
    {
      title: 'Users',
      link: '/users',
      icon: 'ph-users',
    },
    {
      title: 'Payments',
      link: '/payments',
      icon: 'nimbus:money',
    },
  ])

  return { sidebarItems }
}
