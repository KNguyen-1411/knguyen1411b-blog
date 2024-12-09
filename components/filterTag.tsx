interface FilterTagProps {
  selectedTag: string | null
  // eslint-disable-next-line no-unused-vars
  setSelectedTag: (tag: string | null) => void
  TAGS: string[]
}
export default function FilterTag({
  selectedTag,
  setSelectedTag,
  TAGS,
}: FilterTagProps) {
  return (
    <div className="mb-8">
      <h2 className="text-md font-semibold mb-4 text-center">Filter by Tags</h2>
      <div className="flex gap-2 justify-center">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-3xl hover:bg-blue-300 transition-all duration-300 ${
              selectedTag === tag
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
