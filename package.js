Package.describe({
    summary: "Create personalized Qr Code in Javascript. Qrcodesvg allow you to create beautiful QrCode on client-side."
});

Package.on_use(function (api) {
    api.add_files(['lib/raphael.js','lib/qrcodesvg.js'], "client");
    api.export('Qrcodesvg')
});