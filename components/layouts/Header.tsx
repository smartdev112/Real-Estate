import Image from "next/image";
// import Link from "next/link";
import {
    Stack,
    AppBar,
    Toolbar,
    Box,
    Typography,
    Link
} from "@mui/material"
import { headerList } from "@/config/contant";

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: 0, mb: '-101px' }}>
            <Toolbar sx={{ zIndex: 10 }}>
                <Stack direction="row" justifyContent="space-around" alignItems="center" width="100%" py="10px">
                    <Link href="/" underline="none" className="custom-logo-link" rel="home">
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
                            <Link key={index} underline="none" href={header.link} className='header-tab' sx={{ color: '#fff', ':hover': { color: '#6e8fef' } }}>
                                <Typography fontWeight={700} fontSize={15}>{header.name}</Typography>
                            </Link>
                        ))}
                    </Stack>
                    <Box></Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
