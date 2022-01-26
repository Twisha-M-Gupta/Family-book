var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs43901e35t5NdeTrubbAZwsRQ-dKXyhHOAQ&usqp=CAU", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://www.creativefabrica.com/wp-content/uploads/2021/01/25/Grandma-Cartoon-Character-Graphics-8059989-1.jpg"];
var names = ["Fmaily Book", "Mridul Gupta", "Priti Gupta", "Saaiansh Gupta", "Dinesh Gupta", "Anita Gupta"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }

    var updatedImage = images[i];

    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}