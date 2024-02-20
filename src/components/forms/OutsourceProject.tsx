import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../shadcn/ui/form';
import { Input } from '../shadcn/ui/input';
import Button from '../formComponents/Button';
import { Textarea } from '../shadcn/ui/textarea';

import {
  OutsourceProjectFormData,
  defaultOutsourceProjectForm,
  outsourceProjectFormSchema,
} from '../../constants/validators/Outsource.validator';
import useOutsource from '../../hooks/useOutsource';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover';
import { cn } from '../../lib/utils';
import { Calendar } from '../shadcn/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button as ShadcnButton } from '../../components/shadcn/ui/button';

export default function OutsourceProjectForm() {
  const form = useForm<OutsourceProjectFormData>({
    resolver: zodResolver(outsourceProjectFormSchema),
    defaultValues: defaultOutsourceProjectForm,
  });

  const { handleSubmit, loading } = useOutsource(form.getValues());

  function onSubmit() {
    handleSubmit().then(() => {
      form.reset();

      // form.setValue('projectBudgetMax', 0);
      // form.setValue('projectBudgetMin', 0);
    });
  }

  return (
    <div className='max-w-[43rem] w-full mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='grid grid-cols-1 xmobile:grid-cols-2 gap-6 xmobile:gap-y-5 xmobile:gap-x-4 mobile:gap-y-8 mobile:gap-x-5'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter Name' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='telephoneNumber'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='Telephone Number'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='xmobile:col-span-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder='Email Address' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='xmobile:col-span-2'>
              {/* <FormLabel>Project Details</FormLabel> */}

              <div className=' grid grid-cols-1 gap-6 xmobile:gap-y-5 mobile:gap-y-8'>
                {/* <FormField
                  control={form.control}
                  name='projectName'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Project Name' {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name='projectDate'
                  render={({ field }) => (
                    <FormItem className='flex flex-col'>
                      <FormLabel className='dark:opacity-80'>
                        Expected start date{' '}
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <ShadcnButton
                              variant={'outline'}
                              className={cn(
                                'w-full pl-3 text-left font-normal justify-start bg-pale-sky focus:ring-1 focus:ring-primary focus:ring-offset-1 dark:border-gray-500 dark:bg-secondary/10',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span className='dark:opacity-80'>
                                  Pick a date
                                </span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </ShadcnButton>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* <div className='mt-6 xmobile:mt-y-5 mobile:mt-y-8 flex items-center justify-between space-x-3 lgMobile:space-x-5'>
                <div className='flex-1'>
                  <FormField
                    control={form.control}
                    name='projectBudgetMin'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type='number'
                            min={0}
                            placeholder='Min'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <hr className='w-6 lgMobile:w-10 border dark:border-gray-500' />

                <div className='flex-1'>
                  <FormField
                    control={form.control}
                    name='projectBudgetMax'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type='number'
                            min={0}
                            placeholder='Max'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div> */}
            </div>

            <div className='xmobile:col-span-2'>
              <FormField
                control={form.control}
                name='projectDescription'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Textarea
                        rows={7}
                        placeholder='Project Description'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex justify-center laptop:justify-end'>
            <Button loading={loading} className='px-8 h-10' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
