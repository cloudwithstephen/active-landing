import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../shadcn/ui/form';
import { Input } from '../shadcn/ui/input';
import Button from '../formComponents/Button';
import { Textarea } from '../shadcn/ui/textarea';

import {
  HireTalentFormData,
  defaultHireTalentForm,
  hireTalentFormSchema,
} from '../../constants/validators/HireTalent.validator';
import { talentRoles, techStacks } from '../../constants/hireTalentOptions';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../shadcn/ui/command';
import { cn } from '../../lib/utils';
import { CheckIcon, ChevronDown } from 'lucide-react';
import { Button as ShadcnButton } from '../shadcn/ui/button';
import { useEffect, useState } from 'react';
import useHireTalent from '../../hooks/useHireTalent';

export default function HireTalentForm() {
  const form = useForm<HireTalentFormData>({
    resolver: zodResolver(hireTalentFormSchema),
    defaultValues: defaultHireTalentForm,
  });

  const { handleSubmit, loading } = useHireTalent(form.getValues());

  function onSubmit() {
    handleSubmit().then(() => {
      // Reset the form fields to initial values
      form.reset();
      // Clear selected tech stacks and roles
      setSelectedTechStacks(new Set());
      setSelectedRoles(new Set());
    });
  }

  const [selectedTechStacks, setSelectedTechStacks] = useState<Set<string>>(
    new Set()
  );

  const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());

  // Update form field when selectedTechStacks changes
  useEffect(() => {
    form.setValue('technologyStack', Array.from(selectedTechStacks));
  }, [selectedTechStacks, form]);

  useEffect(() => {
    form.setValue('role', Array.from(selectedRoles));
  }, [selectedRoles, form]);

  // Handle selecting/deselecting tech stacks
  const toggleTechStackSelection = (techStack: string) => {
    setSelectedTechStacks((prevSelectedTechStacks) => {
      const newSelectedTechStacks = new Set(prevSelectedTechStacks);
      if (newSelectedTechStacks.has(techStack)) {
        newSelectedTechStacks.delete(techStack);
      } else {
        newSelectedTechStacks.add(techStack);
      }
      return newSelectedTechStacks;
    });
  };

  const toggleRoleSelection = (role: string) => {
    setSelectedRoles((prevSelectedRoles) => {
      const newSelectedRoles = new Set(prevSelectedRoles);
      if (newSelectedRoles.has(role)) {
        newSelectedRoles.delete(role);
      } else {
        newSelectedRoles.add(role);
      }
      return newSelectedRoles;
    });
  };

  return (
    <div className='max-w-[43rem] mx-auto'>
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

            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Input placeholder='Company Name' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <ShadcnButton
                    variant='outline'
                    className='h-10 w-full  !px-2 text-left justify-start bg-pale-sky focus:ring-1 focus:ring-primary focus:ring-offset-1 dark:border-gray-500 dark:bg-secondary/10'
                  >
                    {selectedRoles.size > 0 ? (
                      <div className='flex justify-between space-x-4 w-full '>
                        {selectedRoles.size < 3 && (
                          <div className=' single-line-text-truncate'>
                            {Array.from(selectedRoles).join(', ')}
                          </div>
                        )}
                        {selectedRoles.size >= 3 && (
                          <div>{selectedRoles.size} selected roles</div>
                        )}
                        <ChevronDown className='h-4 w-4 whitespace-nowrap' />
                      </div>
                    ) : (
                      <div className='!text-slate-500 w-full !dark:text-slate-400 flex justify-between space-x-4'>
                        <div className=''>Select Role(s)</div>
                        <ChevronDown className='h-4 w-4' />
                      </div>
                    )}
                  </ShadcnButton>
                </PopoverTrigger>

                <PopoverContent className='w-full p-0 bg-white' align='start'>
                  <Command>
                    <CommandInput placeholder={'Tech Stacks'} />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {talentRoles.map((role) => {
                          const isSelected = selectedRoles.has(role);
                          return (
                            <CommandItem
                              key={role}
                              onSelect={() => toggleRoleSelection(role)}
                            >
                              <div
                                className={cn('flex items-center', {
                                  'text-blue-500': isSelected,
                                })}
                              >
                                <div
                                  className={cn(
                                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                    isSelected
                                      ? 'bg-primary text-white'
                                      : 'opacity-50 [&_svg]:invisible'
                                  )}
                                >
                                  <CheckIcon className={cn('h-4 w-4')} />
                                </div>

                                <div className=''>{role}</div>
                              </div>
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                      {selectedRoles.size > 0 && (
                        <>
                          <CommandSeparator />
                          <CommandGroup>
                            <CommandItem
                              onSelect={() => setSelectedRoles(new Set())}
                              className='justify-center text-center'
                            >
                              Clear selections
                            </CommandItem>
                          </CommandGroup>
                        </>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {selectedRoles.size > 0 && (
                <div className='text-xs mt-1 single-line-text-truncate'>
                  {Array.from(selectedRoles).join(', ')}
                </div>
              )}
            </div>

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <ShadcnButton
                    variant='outline'
                    className='h-10 w-full  !px-2 text-left justify-start bg-pale-sky focus:ring-1 focus:ring-primary focus:ring-offset-1 dark:border-gray-500 dark:bg-secondary/10'
                  >
                    {selectedTechStacks.size > 0 ? (
                      <div className='flex justify-between space-x-4 w-full'>
                        {selectedTechStacks.size < 3 && (
                          <div className=' single-line-text-truncate'>
                            {Array.from(selectedTechStacks).join(', ')}
                          </div>
                        )}
                        {selectedTechStacks.size >= 3 && (
                          <div>{selectedTechStacks.size} selected stacks</div>
                        )}
                        <ChevronDown className='h-4 w-4' />
                      </div>
                    ) : (
                      <div className='!text-slate-500 w-full !dark:text-slate-400 flex justify-between space-x-4'>
                        <div className=''>Technology Stack</div>
                        <ChevronDown className='h-4 w-4' />
                      </div>
                    )}
                  </ShadcnButton>
                </PopoverTrigger>

                <PopoverContent className='w-full p-0 bg-white' align='start'>
                  <Command>
                    <CommandInput placeholder={'Tech Stacks'} />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {techStacks.map((stack) => {
                          const isSelected = selectedTechStacks.has(stack);
                          return (
                            <CommandItem
                              key={stack}
                              onSelect={() => toggleTechStackSelection(stack)}
                            >
                              <div
                                className={cn('flex items-center', {
                                  'text-blue-500': isSelected,
                                })}
                              >
                                <div
                                  className={cn(
                                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                    isSelected
                                      ? 'bg-primary text-white'
                                      : 'opacity-50 [&_svg]:invisible'
                                  )}
                                >
                                  <CheckIcon className={cn('h-4 w-4')} />
                                </div>

                                <div className=''>{stack}</div>
                              </div>
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                      {selectedTechStacks.size > 0 && (
                        <>
                          <CommandSeparator />
                          <CommandGroup>
                            <CommandItem
                              onSelect={() => setSelectedTechStacks(new Set())}
                              className='justify-center text-center'
                            >
                              Clear selections
                            </CommandItem>
                          </CommandGroup>
                        </>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {selectedTechStacks.size > 0 && (
                <div className='text-xs mt-1 single-line-text-truncate'>
                  {Array.from(selectedTechStacks).join(', ')}
                </div>
              )}
            </div>

            {/* <div className='xmobile:col-span-2'>
              <FormLabel>Project Budget</FormLabel>
              <div className='mt-4 flex items-center justify-between space-x-3 lgMobile:space-x-5'>
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
              </div>
            </div> */}

            <div className='xmobile:col-span-2'>
              <FormField
                control={form.control}
                name='jobDescription'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Textarea
                        rows={7}
                        placeholder='Job Description'
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
