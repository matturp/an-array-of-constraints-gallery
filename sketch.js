
db.collection("images").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      const image = document.createElement('img');
image.setAttribute('src', doc.data().image);
image.setAttribute('width', 90 + '%');
document.getElementById('gallery').appendChild(image);
  });
});


