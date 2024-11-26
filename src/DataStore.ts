export interface FileMetadata {
  filePath: string
  isDirectory: boolean
  lastModified: Date
}

export default interface DataStore {
  addRecord(
    filePath: string,
    isDirectory: boolean,
    lastModified: Date,
  ): Promise<void>
  updateRecord(
    oldFilePath: string,
    newFilePath: string,
    lastModified: Date,
  ): Promise<void>
  removeRecord(filePath: string): Promise<void>
  findRecord(filePath: string): Promise<FileMetadata | null>
  findRecordsByPrefix(prefix: string): Promise<FileMetadata[]>
}
