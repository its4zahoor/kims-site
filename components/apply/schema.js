import * as Yup from "yup";
export const schema = Yup.object().shape({
    image:Yup.mixed().nullable().required("Image is required"),
    name:Yup.string().nullable().required("Name is required"),
    guardianName:Yup.string().nullable().required("Guardian Name is required"),
    relation:Yup.string().nullable().required("Relation is required"),
    guardianPhone:Yup.string().nullable().required("Phone is required").matches(/^\d{10,}$/,{
        message:"Please enter valid phone"
    }),
    gender:Yup.string().nullable().required("Gender is required"),
    dob:Yup.string().nullable().required("Date of birth is required"),
    email:Yup.string().email().nullable().required("Email is required"),
    cnic:Yup.string().nullable().required("CNIC is required").matches(/^\d{5}\-\d{7}\-\d$/,{message:"Please enter cnic like 12345-1234567-1"}),
    phone:Yup.string().nullable().required("Phone is required").matches(/^\d{8,}$/,{
        message:"Please enter valid phone"
    }),
    mobile:Yup.string().nullable().required("Phone is required").matches(/^\d{10,}$/,{
        message:"Please enter valid phone"
    }),
    address:Yup.string().nullable().required("Address is required"),
    city:Yup.string().nullable().required("City is required"),
    state:Yup.string().nullable().required("State is required"),
    kmuCatQualified: Yup.string().nullable().required("Field is required"),
    kmuResultFile:Yup.mixed().nullable().when("kmuCatQualified",{
        is:"Yes",
        then:()=>Yup.mixed().nullable().required("File is required")
    }),
    kmuCatChallanFile:Yup.mixed().nullable().when("kmuCatQualified",{
        is:"No",
        then:()=>Yup.mixed().nullable().required("File is required")
    }),
    instituteId:Yup.string().nullable().required("Program is required"),
    shift:Yup.string().nullable().required("Shift is required"),
    programTypeId:Yup.string().nullable().required("Field is required"),
    programId:Yup.string().nullable().required("Field is required"),
    degrees:Yup.array().of(Yup.object().shape({
        name:Yup.string().nullable().required("Name is required"),
        majorSubject:Yup.string().nullable().required("Subject is required"),
        passingYear:Yup.string().nullable().required("Year is required"),
        obtainedMarks:Yup.string().nullable().required("Marks is required")
    })),
    documentFile:Yup.mixed().nullable().required("File is required")
})