import {
    SIWEVerifyMessageArgs,
    SIWECreateMessageArgs,
    SIWESession,
    createSIWEConfig,
    formatMessage,
    AppKitSIWEClient
} from "@reown/appkit-siwe";


async function getMessageParams() {
    return {
        domain: window.location.host,
        uri: window.location.origin,
        chains: [1, 11155111],
        statement: "Sign in to DEMO APP",
        iat: new Date().toISOString()
    };
}

async function getNonce(address?: string): Promise<string> {
    return address + "nonce";
}

async function getSession(): Promise<SIWESession | null> {
    console.log("getSession");
    return null;
}

async function verifyMessage({message, signature}: SIWEVerifyMessageArgs): Promise<boolean> {
    console.log("verifyMessage", message, signature);
    return true;
}

async function signOut(): Promise<boolean> {
    return true;
}

export const siweConfig: AppKitSIWEClient = createSIWEConfig({
    getMessageParams,
    createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, address),
    getNonce,
    getSession,
    verifyMessage,
    signOut,
});


