const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/voceDB")

const voceSchema = new mongoose.Schema({
    naziv: {
        type: String,
        required: [true, "Molimo unesite naziv"]
    },
    kolicinu: Number,
    ocjena: {
        type: Number,
        min: 1,
        max: 10
    }
});

const Voce = mongoose.model("Fruit", voceSchema);

const vocka1 = new Voce({
    naziv: "Malina",
    kolicinu: 20
});

vocka1.save()

vocke = [
    {
        naziv: "Jabuka",
        kolicinu: 20,
        ocjena: 5
    },
    {
        naziv: "Jagode",
        kolicinu: 10,
        ocjena: 10
    },
    {
        naziv: "Borovnice",
        kolicinu: 50,
        ocjena: 2
    }
]

// Voce.insertMany(vocke, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Uspjesan insert u bazu");
//     }
// })

// Voce.updateOne({ _id: "61e1b88cec9adaf07dfd3499" }, { naziv: "Jabuka" }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Uspjesan insert u bazu");
//         //mongoose.connection.close()
//     }
// })
// Voce.deleteOne({ _id: "61e1b88cec9adaf07dfd3499" }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Uspjesno brisanje");
//         //mongoose.connection.close()
//     }
// })

const osobaSchema = mongoose.Schema({
    ime: String,
    godine: Number,
    najdrazeVoce: voceSchema
})

const Osoba = mongoose.model("Person", osobaSchema)

vocka2 = new Voce({
    naziv: "Ananas",
    kolicinu: 5,
    ocjena: 10
})
//vocka2.save()
const osoba1 = new Osoba({
    ime: "John",
    godine: 30,
    najdrazeVoce: vocka2
})

//osoba1.save()

// Voce.find((err, voceDB) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(voceDB);
//         voceDB.forEach((vocka) => {
//             console.log(vocka.kolicinu);
//         })
//     }
// })