"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ZodType, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constant/route";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

//* defining props here in ts format using interface and field values coming from react hook from
interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  defaultValue: T;
  formType: "SIGN_IN" | "SIGN_UP";
}
// ** depending on sigin and signup we will reuse our form
const AuthForm = <T extends FieldValues>({
  formType,
  schema,
  onSubmit,
  defaultValue,
}: AuthFormProps<T>) => {
  // ** use form cmoing from shadcn ui
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue as DefaultValues<T>,
  });
  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO: Authenticate User
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <>
       <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {/**  beacouse defualt value is an object  */}
        {Object.keys(defaultValue).map((field) => (
          <FormField
            key={field}
            /*
             The control={form.control} prop in the <FormField> component is a 
            core part of React Hook Form. It connects your form field to the form's internal state
             and handles validation, tracking, and updates.
             */
            control={form.control}
            //** * it tells treat value like T from interface
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    // ** props are passing here
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Signin In..."
              : "Signing Up..."
            : buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don't have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
    </>

 
  );
};
export default AuthForm;
