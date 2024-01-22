import Image from "next/image";
import Link from "next/link";
import {
    Stack,
    Slide,
    AppBar,
    Toolbar,
    useScrollTrigger,
    Box,
    Typography
} from "@mui/material"
import { headerList } from "@/config/contant";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props: Props) {
    return (
        <HideOnScroll {...props}>
            <AppBar sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
                <Toolbar>
                    <Stack direction="row" justifyContent="space-around" alignItems="center" width="100%" py="10px">
                        <Link href="/" className="custom-logo-link" rel="home">
                            <Image
                                width="112"
                                height="71"
                                src="/assets/imgs/logo.png"
                                className="custom-logo"
                                alt="LMV Holding"
                                decoding="async"
                            />
                        </Link>
                        <Stack direction="row" alignItems="center" gap={4} display={{ xs: 'none', sm: 'none', md: 'flex' }} ml="-10%">
                            {headerList.map((header, index) => (
                                <Link key={index} href={header.link} className='header-tab'>
                                    <Typography fontWeight={700} fontSize={15}>{header.name}</Typography>
                                </Link>
                            ))}
                        </Stack>
                        <Box></Box>
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}
