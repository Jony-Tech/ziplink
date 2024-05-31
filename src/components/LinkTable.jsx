

export default function LinkTable() {

    //example data
  const rows = [
    { link: 'https://example.com', date: '11/05/2024', time: '12:38' },
    { link: 'https://example.com', date: '12/01/2024', time: '14:02' },
    { link: 'https://example.com', date: '28/11/2023', time: '22:40' }
  ];

  return (
    //table of the last shortened links
    <div className="container mx-auto p-4 max-w-2xl border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Ultimos links acortados:</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full text-sm leading-normal">
              <th className="py-3 px-6 text-left">Link</th>
              <th className="py-3 px-6 text-left">Fecha</th>
              <th className="py-3 px-6 text-left">Hora</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row, index) => (
              <tr className="border-b border-gray-200 hover:bg-gray-100" key={index}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <a href={row.link} className="font-semibold">
                    {row.link}
                  </a>
                </td>
                <td className="py-3 px-6 text-left">{row.date}</td>
                <td className="py-3 px-6 text-left">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}
