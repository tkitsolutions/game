import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import Button from './components/button';
import Radio from './components/radio';
import Tabs from './components/tabs';
import Text from './components/text';
import Card from './components/card';
import Tag from './components/tag';
import Heading from './components/heading';
import Input from './components/input';
import Textarea from './components/textarea';
import Checkbox from './components/checkbox';
import colors from './colors';
import styles from './styles';

const theme = {
    colors,
    components: {
        Text,
        Heading,
        Button,
        Card,
        Tag,
        Input,
        Textarea,
        Tabs,
        Radio,
        Checkbox,
    },
    styles,
};

export default extendTheme(
    theme,
    withDefaultColorScheme({
        colorScheme: 'orange',
    }),
);
