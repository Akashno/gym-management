import { onMounted, ref } from 'vue'
import { useFirebaseStorage } from 'vuefire'
import { getDownloadURL, listAll, ref as storageRef } from 'firebase/storage'

interface FileData {
  name: string
  url: string
}

export function useFirebase() {
  const storage = useFirebaseStorage()
  const getAssets = async (folderName: string): Promise<FileData[]> => {
    let files: FileData[] = []
    const rootStorageRef = storageRef(storage, folderName) // Reference to the root directory
    try {
      const listResult = await listAll(rootStorageRef)
      const filePromises = listResult.items.map(async (item) => {
        const url = await getDownloadURL(item)
        return { name: item.name, url } as FileData
      })
      files = await Promise.all(filePromises)
      return files
    }
    catch (error) {
      console.error('Error listing folders:', error)
      return files
    }
  }

  const core = ref<FileData[]>([])
  const doors = ref<FileData[]>([])
  const interlocks = ref<FileData[]>([])

  onMounted(async () => {
    core.value = await getAssets('/core')
    doors.value = await getAssets('/doors')
    interlocks.value = await getAssets('/interlock')
  })

  return { assets: { core, doors, interlocks } }
}
