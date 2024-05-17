
const paragraphs = ['Apps and databases: The application is the interface from the human to the', 
    'machine. The frontend application in most cases acts as the first data upstream.' ,
    'Data at this level is designed to serve application transactions as fast as possible.', 
    '2. Data lake: Data from multiple databases needs to be stored in one place. The data', 
    'lake concept and technologies suit the needs. The data lake stores data in a file', 
    'format such as a CSV file, Avro, or Parquet.', 
    'The advantage of storing data in a file format is that it can accept any data sources;', 
    'for example, MySQL Database can export the data to CSV files, image data can' ,
    'be stored as JPEG files, and IoT device data can be stored as JSON files. Another', 
    'advantage of storing data in a data lake is it does not require a schema at this stage.',
    '3. Data warehouse: When you know any data in a data lake is valuable, you need to', 
    'start thinking about the following:', 
    'A. What is the schema?', 
    'B. How do you query the data?',
'C. What is the best data model for the data?'];



const item = document.getElementById("items");
const dataContainer = document.getElementById("data")


function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex !=0){
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--; 
       [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
       ];
    }
    return array;
}


function generate(){

    if(item.value == 0){
        alert("The Value cannot be zero")
    }else if (item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    }else{

        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs); 

        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map(paragraphs => `
        <p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML =  paragraphsHTML;
    }

}