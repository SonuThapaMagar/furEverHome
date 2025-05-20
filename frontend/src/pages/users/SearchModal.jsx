"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import "../../styles/search.css"

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock search function - in a real app, this would query your database
  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results based on query
      const mockResults = [
        { id: 1, name: "Coco", breed: "Border Collie", age: "Young", gender: "female", imageUrl: "/placeholder.jpg" },
        { id: 2, name: "Max", breed: "Golden Retriever", age: "Adult", gender: "male", imageUrl: "/placeholder.jpg" },
        { id: 3, name: "Luna", breed: "Husky", age: "Young", gender: "female", imageUrl: "/placeholder.jpg" },
      ].filter(
        (pet) =>
          pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pet.breed.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setSearchResults(mockResults)
      setIsSearching(false)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <form onSubmit={handleSearch} className="search-form">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search pets by name or breed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            {searchQuery && (
              <button type="button" className="clear-button" onClick={() => setSearchQuery("")}>
                <X size={16} />
              </button>
            )}
          </form>
          <button className="close-button" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">Searching...</div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="no-results">No pets found matching "{searchQuery}"</div>
          ) : (
            searchResults.map((pet) => (
              <div key={pet.id} className="search-result-item">
                <div className="result-image">
                  <img src={pet.imageUrl || "/placeholder.svg"} alt={pet.name} />
                </div>
                <div className="result-info">
                  <div className="result-name">
                    {pet.name}
                    <span className={pet.gender === "female" ? "gender-female" : "gender-male"}>
                      {pet.gender === "female" ? "♀️" : "♂️"}
                    </span>
                  </div>
                  <div className="result-details">
                    {pet.age} | {pet.breed}
                  </div>
                </div>
              </div>
            ))
          )}

          {!searchQuery && (
            <div className="search-prompt">
              <Search size={40} className="prompt-icon" />
              <p>Search for pets by name or breed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
