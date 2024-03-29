import {useForm} from "react-hook-form";
import Layout from "@/components/layout";
import sendEmail from "lib/email";

const ContactForm=() => {
  const {
    register,
    handleSubmit,

    formState: {errors},
  }=useForm();

  const onSubmit=async (data) => {
    try {
      await sendEmail(data);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };

  // Rest of your form code...

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {required: true})}
          />
          {errors.name&&<span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email&&<span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            {...register("phone", {required: "Phone is required"})}
          />
          {errors.phone&&<span>This field is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
  );
};

ContactForm.getLayout = function getLayout(page) {

  return (
        <Layout
        bg="white" headerBg="white" footerBg="black" pillowColor=''
    >
      {page}
    </Layout>
  )
}
export default ContactForm;
