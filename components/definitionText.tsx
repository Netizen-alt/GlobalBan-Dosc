import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {blue} from "@mui/material/colors";

interface definitionTextProps {
    text: string,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
};

const Definitions = {
    "server.cfg": "The server configuration file",
    "CFG Editor": "A tab within the txAdmin interface that allows you to edit the server.cfg file",
    "txAdmin": "The web interface for managing your server",
    "FXServer.exe": "The executable file that runs your server",
    "localhost:40120": "The default address for accessing your txAdmin interface",
    "Popular Templates": "A list of ready-made server files that you can use to get started",
    "FiveM": "The multiplayer modification for Grand Theft Auto V",
    "RedM": "The multiplayer modification for Red Dead Redemption 2",
    "Keymaster": "The Site for managing your license keys and escrowed resources.",
    "QB-Core": "An advanced FiveM RP framework including jobs, gangs, housing & more!",
    "ESX Legacy": "The most popular FiveM RP framework, containing Jobs, Housing, Vehicles & more!",
    "Cfx Default": "The base resources required to run a minimal server.",
    "VORP Core": "The leading RP Framework for RedM containing various jobs, stables, hunting, housing & more!",
    "Definition Tooltips": "This is a tooltip that explains what a word means.",
    "Patreon": "A membership platform that provides business tools for content creators to run a subscription service.",
    "APNG": "A file format for animated images that is similar to GIF.",
};


const DefinitionText: React.FC<definitionTextProps> = ({text}) => {
    const definition = Definitions[text];
    return (
        <Tooltip title={definition} arrow>
            <b style={{color: blue[300]}}>{text}</b>
        </Tooltip>
    );
}

export default DefinitionText;