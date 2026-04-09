
// -- Update Mod Meta Preview -- \\
document.getElementById('novamod_metaPreview').innerHTML = `{
    &quot;id&quot;: &quot;example&quot;,
    &quot;title&quot;: &quot;Example Mod&quot;, // My engine supports .json and .jsonc, when it checks for json it also checks for jsonc
    &quot;description&quot;: &quot;Example Mod Folder&quot;,
    &quot;tags&quot;: [&quot;EXAMPLE&quot;], // QoL, WEEKS, SONGS, EXAMPLE, CHARACTERS, ENHANCEMENTS, PORT
    &quot;contributors&quot;: [ // This is the credits that show in the mods menu, there is a seperate thing later for the credits menu
        {
            &quot;name&quot;: &quot;My Team Name&quot;,
            &quot;role&quot;: &quot;What my team does&quot; // Optional
        }
    ],
    &quot;mod_version&quot;: &quot;0.1.0&quot;, // Unlike V-Slice, this can be whatever you want
    &quot;api_version&quot;: &quot;0.0.0&quot; // We need this property for backwards compatibility reasons.
}`;
    
// -- Update Example Level Preview -- \\
document.getElementById('levelPreview').innerHTML = `{
    &quot;version&quot;: &quot;1.0.0&quot;,
    &quot;name&quot;: &quot;EXAMPLE LEVEL&quot;,
    &quot;titleAsset&quot;: &quot;menus/storymenu/titles/week1&quot;,
    &quot;props&quot;: [],
    &quot;visible&quot;: true,
    &quot;background&quot;: &quot;#F9CF51&quot;,
    &quot;flashColor&quot;: &quot;#33ffff&quot;,
    &quot;songs&quot;: [&quot;test&quot;]
}`;

hljs.highlightAll();