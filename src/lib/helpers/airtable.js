
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_LBT_BASE_ID;
const shareTableName = import.meta.env.VITE_SHARE_TABLE_NAME;

export const getContent = async (maxRecords = 20, includeArchived = false) => {
    //TODO: make the query more composable
    const archiveStr = includeArchived ? '' :'&view=Grid%20view';
    const url = `https://api.airtable.com/v0/${baseId}/${shareTableName}?filterByFormula=AND(%7Bemailable%7D%3DTRUE())&maxRecords=${maxRecords}&sort%5B0%5D%5Bfield%5D=createdAt&sort%5B0%5D%5Bdirection%5D=desc${archiveStr}`
    const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        })
        const {records} = await res.json();
        const content = records.map(item => ({
        id: item.id,
        ...item.fields
    }));
    return content;
}