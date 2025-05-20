import { useState } from "react"
import { Search, Bell, Heart, Filter } from "lucide-react"
import "../../styles/category.css"
import FilterModal from "./filtermodal"
import "../../styles/filtermodal.css"
import coco from "../../images/coco.png";
import chloe from "../../images/chole.png";
import max from "../../images/max.png";
import rockey from "../../images/rockey.png";
import bella from "../../images/bella.png";
import leo from "../../images/leo.png";
import luna from "../../images/luna.png";
import milo from "../../images/milo.png";
import profile from "../../images/profile.png";
import NotificationsPanel from "./notificationpanel"
import "../../styles/notification.css"
import SearchModal from "./searchmodal"

export default function PetCategories() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState({})
  const [activeCategory, setActiveCategory] = useState("Dogs")
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true)

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters)
    console.log("Applied filters:", filters)
    // Here you would typically filter your pet data based on these filters
  }

  return (
    <div className="pet-categories">
      <header>
        <div className="container header-container">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profile} alt="Profile" />
            </div>
            <div>
              <div className="location-text">
                Location
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="location-value">Stylish Boi</div>
            </div>
          </div>

          <div className="header-actions">
            <button className="icon-button" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button className="icon-button notification-button" onClick={() => setIsNotificationsOpen(true)}>
              <Bell size={20} />
              {hasUnreadNotifications && <span className="notification-indicator"></span>}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <h2 className="page-title">Categories</h2>

        <div className="filter-section">
          <button className="filter-button" onClick={() => setIsFilterOpen(true)}>
            <Filter size={20} />
            Filter
            {Object.keys(activeFilters).length > 0 && (
              <span className="filter-badge">{Object.keys(activeFilters).length}</span>
            )}
          </button>

          <div className="category-tabs">
            <button
              className={`category-tab ${activeCategory === "Dogs" ? "active" : ""}`}
              onClick={() => setActiveCategory("Dogs")}
            >
              <span className="category-icon dogs-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10l8-7 8 7v10H4V10z" fill="currentColor" />
                </svg>
              </span>
              Dogs
            </button>
            <button
              className={`category-tab ${activeCategory === "Cats" ? "active" : ""}`}
              onClick={() => setActiveCategory("Cats")}
            >
              <span className="category-icon cats-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Cats
            </button>
          </div>
        </div>

         <div className="pet-grid">
          <PetCard
            name="Coco"
            gender="female"
            info="Young | Border collie"
            imageUrl={coco} 
            isFavorite={false}
          />
          <PetCard name="Milo" gender="male" info="Adult | Samoyed" imageUrl= {milo}  isFavorite={true} />
          <PetCard
            name="Chloe"
            gender="female"
            info="Adult | Mix breed"
            imageUrl={chloe} 
            isFavorite={false}
          />
          <PetCard name="Leo" gender="male" info="Puppy | Pomeranian" imageUrl={leo}  isFavorite={false} />
          <PetCard
            name="Max"
            gender="male"
            info="Adult | Golden Retriever"
            imageUrl={max} 
            isFavorite={false}
          />
          <PetCard name="Luna" gender="female" info="Young | Husky" imageUrl={luna}  isFavorite={true} />
          <PetCard
            name="Rocky"
            gender="male"
            info="Adult | German Shepherd"
            imageUrl={rockey} 
            isFavorite={false}
          />
          <PetCard
            name="Bella"
            gender="female"
            info="Puppy | Labrador"
            imageUrl={bella} 
            isFavorite={false}
          />
        </div>
      </main>

      {/* Modals */}
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} onApplyFilters={handleApplyFilters} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => {
          setIsNotificationsOpen(false)
          setHasUnreadNotifications(false)
        }}
      />
    </div>
  )
}

function PetCard({ name, gender, info, imageUrl, isFavorite }) {
  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <img src={imageUrl || "/placeholder.jpg"} alt={name} className="pet-image" />
      </div>
      <div className="pet-info">
        <div className="pet-name-section">
          <div className="pet-name-gender">
            <h3 className="pet-name">{name}</h3>
            <span className={gender === "female" ? "gender-female" : "gender-male"}>
              {gender === "female" ? "♀️" : "♂️"}
            </span>
          </div>
          <p className="pet-details">{info}</p>
        </div>
        <button className={`favorite-button ${isFavorite ? "active" : ""}`}>
          <Heart className={isFavorite ? "fill-current" : ""} size={20} />
        </button>
      </div>
    </div>
  )
}
