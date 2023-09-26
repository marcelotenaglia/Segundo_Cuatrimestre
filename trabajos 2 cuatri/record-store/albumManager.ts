import { Album } from "./album";
import { FileManager } from "./fileManager";
import * as rls from "readline-sync";

export class AlbumManager {
  albums: Album[];
  public constructor() {
    this.albums = [];
  }
  readAlbums() {
    const readResult = FileManager.readAlbums();
    if (readResult) {
      this.albums = readResult;
      console.log("======== Albums =========\n");
      if (!this.albums.length) {
        console.log("No albums found. \n");
      } else {
        this.albums.forEach((album) => {
          console.log(`
        ID: ${album.id}
        Title: ${album.title}
        Artist: ${album.artist}
        Year: ${album.year}
        Record Label: ${album.recordLabel}
        ---
               
        `);
        });
      }
    }
    rls.keyInPause("\n");
  }
  createAlbum() {
    
      console.log("====== Create Album ======");
    rls.keyInPause();

    const readResult = FileManager.readAlbums();

  if (readResult) {
    this.albums = readResult;
  }

  const title = rls.question ("Enter the title of the Album to Create: ");

  const artist = rls.question ("Enter the artist of the Album to Create: ");
  
  const year = rls.questionInt ("Enter the year of the Album to Create: ");

  const recordLabel = rls.question ("Enter the name of the Record Label: ");

  const newAlbum = new Album (title, artist, year, recordLabel);

  this.albums.push(newAlbum);

  rls.keyInPause();

  FileManager.appendAlbum(this.albums);
  

  console.log (this.albums);

  }
  
  updateAlbum() {
    console.log("====== Update Album ======");
    const idToUpdate = rls.question ("Ingrese el ID of the record to update: ");
    const recordIndex = this.albums.findIndex(
      (album) => album.id === idToUpdate
    ); 
    if (recordIndex !== -1) {
      const recordToUpdate = this.albums[recordIndex];
      const confirmation = rls.keyInYN(
        `Do you want to Update ${recordToUpdate.title} ?`
      );
      if (confirmation) {
        const newArtist = rls.question ("Enter the new artist name: ")
        recordToUpdate.artist = newArtist;
        // hay que hacer lo mismo con year, name y record label
        FileManager.appendAlbum(this.albums);
      } else {
        console.log("Update cancelled. Album not updated. \n");
      }
    } else {
      console.log("Album not found.\n");
    }
    rls.keyInPause();
   
}

  deleteAlbum() {
    console.log("======== Delete Record ========\n");
    const readResult = FileManager.readAlbums();
    if(readResult) {
      this.albums = readResult;
    }
    const idToDelete = rls.question("Enter the ID of the record to delete: ");
    const recordIndex = this.albums.findIndex(
      (album) => album.id === idToDelete
    );
    if (recordIndex !== -1) {
      const recordToDelete = this.albums[recordIndex];
      const confirmation = rls.keyInYN(
        `Do you want to delete ${recordToDelete.title} ?`
      );
      if (confirmation) {
        this.albums.splice(recordIndex, 1);
        FileManager.appendAlbum(this.albums);
      } else {
        console.log("Deletion cancelled. Album not removed. \n");
      }
    } else {
      console.log("Album not found.\n");
    }
    rls.keyInPause();
  }

  menu() {
    while (true) {
      console.clear();
      const choice = rls.keyInSelect(this.menuOptions);
      switch (choice) {
        case 0:
          this.readAlbums();
          break;
        case 1:
          this.createAlbum();
          break;
        case 2:
          this.updateAlbum();
          break;
        case 3:
          this.deleteAlbum();
          break;
        default:
          console.log(`
      -------------
      |           |
      | GOOD BYE! | 
      |  SEE YOU  |
      |   LATER   |
      |           |
      ------------- 
      `);
          return;
      }
    }
  }

  menuOptions = ["List Albums", "Create Album", "Update Album", "Delete Album"];
}