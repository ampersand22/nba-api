import { Button as ChakraButton, Box, Flex, HStack } from '@chakra-ui/react';
export {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Alert, AlertIcon, AvatarBadge, AvatarGroup, ButtonGroup,
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Collapse,
    Box, Container, Flex, Grid, GridItem, Stack, StackDivider, Table, Thead, Tbody, Tr, Td,
    Th, HStack, VStack, Center, Square, Circle, Tag,
    Image,
    Modal, ModalBody, ModalOverlay, ModalContent, ModalCloseButton,
    Skeleton, SkeletonText, SkeletonCircle, Text, FormControl, FormLabel, FormErrorMessage,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, DrawerFooter,
    Badge,
    Heading,
    Link,
    List, ListIcon, ListItem,
    Menu, MenuItem, MenuButton, MenuList, MenuGroup, MenuDivider,
    AspectRatio,
    Portal,
    Progress, ProgressLabel,
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton,
    InputGroup, InputLeftElement, InputRightElement,
    Divider,
    Tooltip,
    Tabs, TabList, TabPanels, TabPanel, Tab,
    Slider, SliderTrack, SliderFilledTrack, SliderThumb, Wrap, WrapItem,
} from '@chakra-ui/react';



// anything we want to add inside the button we pass it in with children
// as a param, because it'll be a child to the parent.
export const Button = ({children, ...props}) => {
    return (
        <ChakraButton {...props}>
            {children}
        </ChakraButton>
    )
}

export const SaveAndCancel = ({ saveText, onSave, cancelText, onCancel, disabled, ...props }) => {
    return (
        <Flex 
            position='sticky'
            bottom={0}
            p={4}
            w='100%'
            bg='white'
            justifyContent='flex-end'
            alignItems='center'
            {...props}
        >
            <HStack spacing={3}>
                <Box>
                    <Button colorScheme='gray' onClick={onCancel}>
                        {cancelText}
                    </Button>
                </Box>
                <Box>
                    <Button colorScheme='green' onClick={onSave} disabled={disabled}>
                        {saveText}
                    </Button>
                </Box>
            </HStack>
        </Flex>
    )
}
