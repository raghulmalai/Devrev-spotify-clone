const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Aga Naga",
      artist: " A. R. Rahman",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FAga%20Naga%20-%20Lyrical%20_%20PS2%20Tamil%20_%20%40ARRahman%20_%20Mani%20Ratnam%20_%20Karthi%2C%20Trisha%20_%20Subaskaran%20_Shakthisree%20(256%20kbps).mp3?alt=media&token=f838a34b-4f2e-4324-b6a4-d139f6e2d84e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FAga%20Naga.jpg?alt=media&token=12d6c75f-a887-4773-9357-6adf3dd82f91",
    },
    {
      id: 2,
      favourite: false,
      songName: "Chilla Chilla",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FChilla%20Chilla%20-%20Full%20Video%20_%20Thunivu%20_%20Ajith%20Kumar%20_%20H%20Vinoth%20_%20Anirudh%20_%20Ghibran%20(256%20kbps).mp3?alt=media&token=3e209ceb-90ff-425a-b880-18743787362d",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FChilla%20Chilla.jpg?alt=media&token=60c668d4-c9ef-4dcc-8a4c-1dd8b5d7393b",
    },
    {
      id: 3,
      favourite: false,
      songName: "June Ponal July",
      artist: "Harris Jayaraj",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FJune%20Ponal%20July%20Katre%20Song%20Lyrics%20_%20Unnale%20Unnale%20_%20Harris%20Jayaraj%20_%20Arun%20_%20Krish%20_%20Harini%20_Jeeva%20(256%20kbps).mp3?alt=media&token=0001cfde-451e-4b2e-b753-39aa56cc6279",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FJune%20ponal.jpg?alt=media&token=c455418b-9dec-485c-be47-034c6f03a59f",
    },
    {
      id: 4,
      favourite: false,
      songName: "Engeyum Eppothum",
      artist: "S. P. Balasubrahmanyam",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FPolladhavan%20-%20Engeyum%20Eppothum%20Video%20Song%20_%20Dhanush%20_%20Vetrimaaran%20_%20%20%40GVPrakashKumarOffl%20%20%20_%20S%20Kathiresan%20(256%20kbps).mp3?alt=media&token=8e4c2d5b-7093-4adb-9825-5250013ccf2c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FEngeyum%20Eppothum.jpg?alt=media&token=b8d6b3e3-5be1-4137-a740-902b38292c3e",
    },
    {
      id: 5,
      favourite: false,
      songName: "Love Today",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FLove%20Today%20-%20Pacha%20Elai%20Lyric%20_Pradeep%20Ranganathan%20_%20Yuvan%20Shankar%20Raja%20_%20AGS%20(256%20kbps).mp3?alt=media&token=f83b99cb-7438-4e85-a5cf-054d2edb0f30",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FLove%20Today.jpg?alt=media&token=a5751b33-c5e1-4ed2-b938-d5cc7493699d",
    },
    {
      id: 6,
      songName: "Loosu Pennae",
      artist: "Silambarasan TR",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FLoosu%20Pennae%20(256%20kbps).mp3?alt=media&token=812aba69-93ba-4a1f-b41a-6fb80f99e49f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FLusu%20penne.jpg?alt=media&token=01e0f4cd-d9ca-405f-b341-df21c95fc04c",
    },
    {
      id: 7,
      favourite: false,
      songName: "Pathala Pathala",
      artist: "Kamal Haasan",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FPathala%20Pathala%20(From%20_Vikram_)%20(256%20kbps).mp3?alt=media&token=4f417d35-f92e-47f4-a142-98a50cb9cdc7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FPathala%20Pathala.jpg?alt=media&token=e2e7d665-e934-4619-88f7-f53d9583f268",
    },
    {
      id: 8,
      favourite: false,
      songName: "Vaa Vaathi",
      artist: "Shweta Mohan",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FVaa%20Vaathi%20Full%20Video%20Song%20_%20Vaathi%20Movie%20_%20Dhanush%2C%20Samyuktha%20_%20GV%20Prakash%20Kumar%20_%20Venky%20Atluri%20(256%20kbps).mp3?alt=media&token=757b537b-722f-4ae2-9a4a-6a3f62f7471c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FVaa%20Vathi.jpg?alt=media&token=b6ba19a2-7ed3-4c0e-a4e7-f2a2b6057656",
    },
    {
      id: 9,
      favourite: false,
      songName: "Vaadi Pulla Vaadi",
      artist: "Hiphop Tamizha",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FVaadi%20Pulla%20Vaadi%20-%20Video%20Song%20_%20Meesaya%20Murukku%20_%20Hiphop%20Tamizha%20_%20Vivek%20_%20Sundar.C%20(256%20kbps).mp3?alt=media&token=1c81672a-a69e-4c92-bde1-2d97ec36d6b9",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FVaadi%20Pulla%20Vaadi.jpg?alt=media&token=6a32f515-9d54-4bb7-ba53-f35691b06cbe",
    },
    {
      id: 10,
      favourite: false,
      songName: "Vinnaithaandi Varuvaayaa",
      artist: "Karthik",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/Ringtone%2FVinnaithaandi%20Varuvaayaa%20-%20Hosanna%20Video%20_%20Rahman%20_%20STR%2C%20Trisha%20(256%20kbps).mp3?alt=media&token=70d11630-a7ef-455d-8ac6-d5e38f1e89b6",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-15b08.appspot.com/o/images%2FVinnathaandi%20Varuvaayaa.jpg?alt=media&token=48e739ea-8bb6-40cb-a98c-ec9beaec4a91",
    },
  ];
  
  export { Songs };