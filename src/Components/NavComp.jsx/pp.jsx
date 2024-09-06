<div className="bg-gray-200 flex rounded-2xl justify-center">
<div className="w-full max-w-lg p-8">
  <Formik
    initialValues={{
      name: '',
      email: '',
      contact: '',
      review: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      resetForm();
    }}
  >
    {({ errors, touched }) => (
      <Form className="space-y-4">
        <div>
          <Field
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${
              touched.name && errors.name ? 'border-red-500' : 'border-black'
            }`}
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2">
            <Field
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${
                touched.email && errors.email ? 'border-red-500' : 'border-black'
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full md:w-1/2">
            <Field
              name="contact"
              type="text"
              placeholder="Enter Contact Number"
              className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${
                touched.contact && errors.contact ? 'border-red-500' : 'border-black'
              }`}
            />
            <ErrorMessage name="contact" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <div>
          <Field
            name="review"
            type="text"
            placeholder="Your Reviews"
            className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${
              touched.review && errors.review ? 'border-red-500' : 'border-black'
            }`}
          />
          <ErrorMessage name="review" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 rounded-lg bg-yellow-700 text-white hover:bg-yellow-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>
</div>
</div>





const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact number is required'),
    review: Yup.string().required('Review is required'),
  });